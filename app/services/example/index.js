export default function example({ server }) {
  const virgilio = this;
  const namespaceexample = virgilio.namespace$('namespaceexample') // doesn't work?

  server.get('/', function exampleGet(req, res) {
    res.send(200, { message: 'moetje'})
  })
};
