import { IConnectionSchema } from "@cognigy/extension-tools";

/**
 * This file defines a 'schema' for a connection of type 'api token' and 'email'.
 * The connection can be referenced in nodes and knowledge
 * - see 'knowledge.ts'
 *
 * The connection also needs to get exposed in the 'createExtension'
 * call:
 * - see 'module.ts'
 */

export const apiKeyConnection: IConnectionSchema = {
	type: "api-key",
	label: "Holds the email and api-token for connecting to Confluence.",
	fields: [
		{fieldName: "Email"},
		{fieldName: "Api-Token"}
	]
};