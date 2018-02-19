import React from 'react'
import Youtube from 'react-youtube'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class VideoPlayer extends React.Component {
  state = {
    playerLoaded: false,
    playerStarted: false
  }

  playerParameters () {
    return ({
      playerVars: {
        autoplay: 0,
        showinfo: 0,
        rel: 0,
        modestbranding: 0,
        start: this.props.startTime
      }
    })
  }

  isVideoPlaying () {
    const {target} = this._player
    return (target.getPlayerState() === 1)
  }

  playToggle () {
    const {target} = this._player
    if (target.getPlayerState() === 1) {
      this._player.target.pauseVideo()
      this.setState({videoPlaying: false, playerStarted: true})
    } else {
      this._player.target.playVideo()
      this.setState({videoPlaying: true, playerStarted: true})
    }
  }

  handleReady (playerObj) {
    this._player = playerObj
    this.setState({playerLoaded: true})
  }

  handlePlay () {
    const {target} = this._player
    console.log(target)
  }

  handlePause () {
  }

  handleEnd () {
    // the content should get back
  }

  onStateChange () {
    this.forceUpdate()
  }

  render () {
    const { playerStarted, playerLoaded } = this.state
    console.log()
    return (
      <div className='container-fluid no-gutters' onClick = { () => { this.playToggle() } }>
        {(playerLoaded && !this.isVideoPlaying()) && (
          <div className="control-container gradient-background">
            {this.props.children}
          </div>
        )}
        <ReactCSSTransitionGroup transitionName="video-cover">
          {(!playerStarted && (
            <div className="video-cover control-container">
              <img src={ this.props.coverImage } />
            </div>))}
        </ReactCSSTransitionGroup>
        <div className="video-background-container">
          <div className="video-background">
            <Youtube
              id={ this.props.videoId }
              videoId={ this.props.videoId }
              opts={ this.playerParameters() }
              onReady={ (playerObj) => { this.handleReady(playerObj) } }
              onPlay={ () => { this.handlePlay() } }
              onPause={ () => { this.handlePause() } }
              onEnd={ () => { this.handleEnd() } }
              onStateChange={ () => { this.onStateChange() } } />
          </div>
        </div>
      </div>
    )
  }
}

VideoPlayer.defadivtProps = {}

VideoPlayer.propTypes = {}

export default VideoPlayer
