import restify from 'restify';

export default function defaultMiddleware(server) {
  console.log('server', server)
  server.use(restify.plugins.bodyParser());
}
