import React, { Component } from 'react';

class progress extends Component {

  state = {
    onnav: false
  }

  render() {
    return (


      <div className=" " >
        <div className="row ">
            <div className="col-3"></div>
          <div className="col-6">
        
            <div className={"c100 p"+ this.props.percentage+" "+this.props.color} >
              <span>{this.props.percentage}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
           

          </div>


          
        </div>

      

      </div>
    );


  }

}
export default progress

  {/* circle */}




        {/* Change the size of the progress bar.
<div class="c100 p25 big">
  ...
</div>
<div class="c100 p25 small">
  ...
</div> */}
        {/* Change the color of the progress bar.
<div class="c100 p25 green">
  ...
</div>
<div class="c100 p25 orange">
  ...
</div>
<div class="c100 p25 dark">
  ...
</div> */}