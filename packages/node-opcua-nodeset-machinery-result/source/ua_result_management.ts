// ----- this file has been automatically generated - do not edit
import { UAObject, UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { QualifiedName } from "node-opcua-data-model"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UAFolder } from "node-opcua-nodeset-ua/source/ua_folder"
import { DTResult } from "./dt_result"
import { UAResultTransfer } from "./ua_result_transfer"
/**
 * Provides mechanism to access results generated by
 * the underlying system.
 *
 * |                |                                                            |
 * |----------------|------------------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/Machinery/Result/               |
 * |nodeClass       |ObjectType                                                  |
 * |typedDefinition |ResultManagementType i=1004                                 |
 * |isAbstract      |false                                                       |
 */
export interface UAResultManagement_Base {
    /**
     * defaultInstanceBrowseName
     * The default BrowseName for instances of the type.
     */
    defaultInstanceBrowseName: UAProperty<QualifiedName, DataType.QualifiedName>;
    getLatestResult?: UAMethod;
    getResultById?: UAMethod;
    getResultIdListFiltered?: UAMethod;
    releaseResultHandle?: UAMethod;
    results?: UAFolder;
    resultTransfer?: UAResultTransfer;
}
export interface UAResultManagement extends UAObject, UAResultManagement_Base {
}