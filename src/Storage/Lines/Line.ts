import { ModelResponse } from "../../Formats/Models/ModelResponse"
import { LineId } from "./LineId"
import { LineData } from "./LineData"

export type Line<Data> = ModelResponse<LineId, LineData<Data>>
