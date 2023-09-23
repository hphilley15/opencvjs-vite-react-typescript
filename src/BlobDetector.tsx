import React from 'react';
import cv from '@techstark/opencv-js';

class BlobDetector extends React.Component {
  state: { imgUrl: string | null };

  constructor(props: {}) {
    super(props);
    this.state = {
      imgUrl: null,
    };
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
          <div className="imageCanvas">
            <img src={imgUrl} />
          </div>
        )}
      </div>
    );
  }
}

export default BlobDetector;
