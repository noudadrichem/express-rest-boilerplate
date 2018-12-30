export default function exampleActions() {
  const virgilio = this

  virgilio.namespaceexample.defineAction$('print', function(arg) {
    virgilio.log$.info(arg)
    return arg
  })
}
