import createRouter from './routes';

export default function App({signed = false}) {
  return createRouter(signed);
}
