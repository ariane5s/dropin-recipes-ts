import { ModelResponse } from "../../Formats/Models/ModelResponse"
import { UserId } from "./UserId"
import { ResponseType } from "../../Context"
import { UserData } from "./UserData"

export type User = ModelResponse<UserId, ResponseType.USER, UserData>
