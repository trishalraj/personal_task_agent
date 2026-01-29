import { parseIntent } from "@/server/intentParser";
import { dispatchAction } from "@/server/dispatcher";

export async function POST(req) {
  const { input } = await req.json();

  const intent = parseIntent(input);
  const result = await dispatchAction(intent);

  return Response.json(result);
}
