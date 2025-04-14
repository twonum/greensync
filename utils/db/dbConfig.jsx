import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://Pedroo_owner:kL8WlMRIf0AJ@ep-cool-bush-a150knbg-pooler.ap-southeast-1.aws.neon.tech/Pedroo?sslmode=require"
);
export const db = drizzle(sql, { schema });
