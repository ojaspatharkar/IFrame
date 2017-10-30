import React from 'react'
import ReactDOM from 'react-dom'
import Loader from 'react-loading'
import "./style.css"

class iFrameLoader extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      loading : true,
    }
  }

  componentWillReceiveProps(nextProps, nextState){
    if(this.props.url != nextProps.url)
    {
      this.setState({loading : true});
    }
  }

  onLoaded(){

    this.setState({loading : false},()=>{
      if(this.props.onLoad)
        this.props.onLoad();
    });
  }


  render(){

      return(
        <div style={{height : this.props.height || '100%', width : this.props.width || '100%'}}>
          <iframe src={this.props.url}
            ref = 'iframe'
            style = {Object.assign({},
            {
              display : this.props.display || 'block',
              height : this.props.height || '100%',
              width : this.props.width || '100%',
              position : this.props.position || 'absolute',
              border : (this.props.showBorder) ? "1px solid grey" : "0px"
            },this.props.style || {})}
            onLoad = {()=>this.onLoaded()}
          />
          {
            ((this.state.loading || this.props.url == '') && this.props.showLoading)
            ?
                <div className="loadingPanel">
                  <Loader className="loading" type={this.props.loadingPattern || 'spokes'} color='#444' />
                  <br/>
                  {
                    (this.props.url == '')
                    ?
                      <span>{"Waiting for source..."}</span>
                    :
                      null
                  }

                </div>
            :
              null
          }


        </div>
      );


  }
}



export default iFrameLoader;
