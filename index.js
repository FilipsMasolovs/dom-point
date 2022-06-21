function domPoint() {
  const domPointContainer = document.createElement("div");
  document.body.appendChild(domPointContainer);

  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      const domPointActions = document.createElement("div");
      domPointActions.style.position = 'fixed'
      domPointActions.style.top = '8px'
      domPointActions.style.left = '8px'
      domPointActions.style.height = '16px'
      domPointActions.style.width = `${window.innerWidth - 32}px`
      domPointActions.style.maxWidth = '376px'
      domPointActions.style.color = '#ffffff'
      domPointActions.style.backgroundColor = '#282c34'
      domPointActions.style.display = 'flex'
      domPointActions.style.justifyContent = 'space-between'

      const domPointStyles = document.createElement("div");
      domPointStyles.innerHTML = 'STYLES'

      const domPointCloseButton = document.createElement("button");
      domPointCloseButton.innerHTML = 'X'
      domPointCloseButton.style.border = '0'
      domPointCloseButton.style.padding = '0 4px'
      domPointCloseButton.style.cursor = 'pointer'

      domPointCloseButton.addEventListener('click', () => {
        domPointContainer.innerHTML = null
      })

      domPointActions.appendChild(domPointStyles);
      domPointActions.appendChild(domPointCloseButton);

      const domElement = e.target.outerHTML
      const domPointContent = document.createElement("div");
      domPointContent.innerHTML = domElement.replaceAll('<', "&lt;").replaceAll('>','&gt;')
      domPointContent.style.position = 'fixed'
      domPointContent.style.top = '24px'
      domPointContent.style.left = '8px'
      domPointContent.style.width = `${window.innerWidth - 32}px`
      domPointContent.style.maxWidth = '360px'
      domPointContent.style.padding = '8px'
      domPointContent.style.color = '#ffffff'
      domPointContent.style.backgroundColor = '#323639'
      domPointContent.style.overflowWrap = 'break-word'
      domPointContent.style.backgroundColor = '#323639'
      domPointContent.style.backgroundColor = '#323639'
      domPointContent.style.backgroundColor = '#323639'
      domPointContent.style.backgroundColor = '#323639'
      domPointContent.style.backgroundColor = '#323639'

      domPointContainer.innerHTML = null
      domPointContainer.appendChild(domPointActions);
      domPointContainer.appendChild(domPointContent);
    }, false);
  }
}

module.exports = domPoint