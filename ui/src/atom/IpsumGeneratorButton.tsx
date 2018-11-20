import * as React from "react"
import Button from "reactstrap/lib/Button"
import retrieveIpsumText from "src/utils/IpsumTextGenerator"

class IpsumGeneratorButton extends React.Component {
  public render() {
    return (
      <Button id="ipsum-generator-button" onClick={retrieveIpsumText}>
        Generate Ipsum!
      </Button>
    )
  }
}

export default IpsumGeneratorButton
