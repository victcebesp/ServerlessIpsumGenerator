import { Handler, Context, Callback } from "aws-lambda"
import loremIpsum = require("lorem-ipsum")

interface Response {
  statusCode: number
  body: string
  headers: object
}

export const hello: Handler = (
  event: any,
  context: Context,
  callback: Callback
) => {
  const response: Response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({ message: getIpsumText() }),
  }

  callback(undefined, response)
}

function getIpsumText(): string {
  const lipsum: string = loremIpsum({
    count: (Math.random() + 10) * 20,
    units: "words",
  })

  return lipsum
}
