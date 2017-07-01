import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter2"
})
export class DataFilterPipe2 implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.Position.indexOf(query) > -1);
        }
        return array;
    }
}
