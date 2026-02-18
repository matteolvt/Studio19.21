import prerenderNode from "prerender-node";

prerenderNode.set('prerenderToken', process.env.PRERENDER_API_TOKEN);

export function middleware(req, res, next) {
  return prerender(req, res, next);
}
