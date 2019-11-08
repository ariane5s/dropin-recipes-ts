import { ModelResponse } from "../../Formats/Models/Responses"
import { UserId } from "./UserId"
import { UserData } from "./UserData"

export type User = ModelResponse<UserId, UserData>
