const retrieveIpsumText = () => {
  if (ipsumGeneratorAndTextAreaAreDefined()) {
    document.getElementById("ipsum-generator-button")!.style.display = "none"
    document.getElementById("text-area")!.style.display = "block"
    document.getElementById("redo-btn")!.style.display = "block"
    $.get(
      "https://v0fuc4vt1d.execute-api.us-east-1.amazonaws.com/dev/generateIpsum"
    )
      .then((data, _) => {
        document.getElementById("text-area")!.innerText = data.message
      })
      .fail((_, status) => {
        console.log(`something went wrong. Code: ${status}`)
      })
  }
}

const ipsumGeneratorAndTextAreaAreDefined = () =>
  document.getElementById("ipsum-generator-button") &&
  document.getElementById("text-area") &&
  document.getElementById("redo-btn")

export default retrieveIpsumText
