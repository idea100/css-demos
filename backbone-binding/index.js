$(function () {
  var Model = Backbone.Model.extend({
    initialize: function () {
      this.set({value: ''})
    }
  })

  var View = Backbone.View.extend({
    el: '#root',
    tagName: 'div',
    className: 'backbone',
    events: {
      'input .input': 'onInput'
    },
    initialize: function () {
      var self = this
      this.model = new Model()
      this.model.on('change:value', function(model, value) {
        self.onModelChange(model, value)
      })
      this.$input = $('#input')
      this.$span = $('#span')
    },
    onModelChange: function (model, value) {
      this.$input.val(value)
      this.$span.text(value)
    },
    render: function () {

    },
    onInput: function (e) {
      this.model.set({value: e.target.value})
    }
  })

  var view = window.view = new View()
})
