var React = require('react');

var ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired
  },

  getDefaultProps: function(){
    return {
      title: 'Error'
    }
  },

  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));

    modal.open();
  },
  render: function(){

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="" >
        <h4>Some Title</h4>
        <p>Our error message!</p>
        <p>
          <button type="button" className="button hollow " data-close="" >
            Okay
          </button>
        </p>
      </div>
    )
  }
});

module.exports = ErrorModal;
