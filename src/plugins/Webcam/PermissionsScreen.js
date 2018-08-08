const { h } = require('preact')

module.exports = (i18n, props) => {
  return (
    <div class="uppy-Webcam-permissons">
      <h1 class="uppy-Webcam-Title">{i18n('allowAccessTitle')}</h1>
      <p style="text-align: center">{i18n('allowAccessDescription')}</p>
    </div>
  )
}
