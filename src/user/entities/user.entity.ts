import { ClientArg, ModelArg, ModelQueryOptionsCb, QueryOptionsCb, ResultArg, UserArgs } from "@prisma/client/runtime/library";

export class User implements User {
    name?: string;
    result: { [x: string]: ResultArg; };
    model: { [x: string]: ModelArg; };
    client: ClientArg;
    query: { [x: string]: { [x: string]: ModelQueryOptionsCb; } | QueryOptionsCb; };

}
