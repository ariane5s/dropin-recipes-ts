import { ModelResponse } from "../../Formats/Models/ModelResponse"
import { UserId } from "./UserId"
import { UserData } from "./UserData"

export type User = ModelResponse<UserId, UserData>
