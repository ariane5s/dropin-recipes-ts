import { ModelResponse } from "../../Formats/Models/ModelResponse"
import { LineId } from "./LineId"
import { ResponseType } from "../../Context"

export type Line<Data> = ModelResponse<LineId, ResponseType.LINE, Data>
