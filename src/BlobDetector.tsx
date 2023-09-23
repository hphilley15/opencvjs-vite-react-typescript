import React from 'react';
import cv from '@techstark/opencv-js';

class BlobDetector extends React.Component {
  inputImgRef: React.RefObject<HTMLCanvasElement>;
  edgeImgRef: React.RefObject<HTMLCanvasElement>;

  state: { imgUrl: string | null };

  constructor(props: {}) {
    super(props);
    this.inputImgRef = React.createRef();
    this.edgeImgRef = React.createRef();
    this.state = {
      imgUrl: null,
    };
  }

  async cannyEdgeDetector(imgSrc: HTMLImageElement) {
    console.log('Running Canny Edge Detector');
    const img = cv.imread(imgSrc);
    const grayImg = new cv.Mat();
    cv.cvtColor(img, grayImg, cv.COLOR_BGR2GRAY);
    const edgeImg = new cv.Mat();
    cv.Canny(grayImg, edgeImg, 80, 160);

    cv.imshow(this.edgeImgRef.current!, edgeImg);

    img.delete();
    grayImg.delete();
    edgeImg.delete();
  }

  render() {
    const { imgUrl } = this.state;

    return (
      <div>
        <div className="fileinput">
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files != null && e.target.files![0]) {
                this.setState({
                  imgUrl: URL.createObjectURL(e.target.files[0]),
                });
              }
            }}
          />
        </div>
        {imgUrl && (
          <div>
            <div className="imageCanvas">
              <img
                src={imgUrl}
                onLoad={(e: React.ChangeEvent<HTMLImageElement>) => {
                  this.cannyEdgeDetector(e.target!);
                }}
              />
            </div>

            <div className="imageCanvas"></div>
            <canvas ref={this.edgeImgRef} />
          </div>
        )}
      </div>
    );
  }
}

export default BlobDetector;
