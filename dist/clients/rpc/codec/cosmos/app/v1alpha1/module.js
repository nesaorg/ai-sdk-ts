/* eslint-disable */
import _m0 from 'protobufjs/minimal.js';
import { isSet } from '../../../helpers.js';
export const protobufPackage = 'cosmos.app.v1alpha1';
function createBaseModuleDescriptor() {
    return {
        goImport: '',
        usePackage: [],
        canMigrateFrom: [],
    };
}
export const ModuleDescriptor = {
    typeUrl: '/cosmos.app.v1alpha1.ModuleDescriptor',
    encode(message, writer = _m0.Writer.create()) {
        if (message.goImport !== '') {
            writer.uint32(10).string(message.goImport);
        }
        for (const v of message.usePackage) {
            PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.canMigrateFrom) {
            MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.goImport = reader.string();
                    break;
                case 2:
                    message.usePackage.push(PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.canMigrateFrom.push(MigrateFromInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModuleDescriptor();
        if (isSet(object.goImport))
            obj.goImport = String(object.goImport);
        if (Array.isArray(object?.usePackage))
            obj.usePackage = object.usePackage.map((e) => PackageReference.fromJSON(e));
        if (Array.isArray(object?.canMigrateFrom))
            obj.canMigrateFrom = object.canMigrateFrom.map((e) => MigrateFromInfo.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.goImport !== undefined && (obj.goImport = message.goImport);
        if (message.usePackage) {
            obj.usePackage = message.usePackage.map((e) => e ? PackageReference.toJSON(e) : undefined);
        }
        else {
            obj.usePackage = [];
        }
        if (message.canMigrateFrom) {
            obj.canMigrateFrom = message.canMigrateFrom.map((e) => e ? MigrateFromInfo.toJSON(e) : undefined);
        }
        else {
            obj.canMigrateFrom = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleDescriptor();
        message.goImport = object.goImport ?? '';
        message.usePackage =
            object.usePackage?.map((e) => PackageReference.fromPartial(e)) || [];
        message.canMigrateFrom =
            object.canMigrateFrom?.map((e) => MigrateFromInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBasePackageReference() {
    return {
        name: '',
        revision: 0,
    };
}
export const PackageReference = {
    typeUrl: '/cosmos.app.v1alpha1.PackageReference',
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePackageReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.revision = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePackageReference();
        if (isSet(object.name))
            obj.name = String(object.name);
        if (isSet(object.revision))
            obj.revision = Number(object.revision);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.revision !== undefined &&
            (obj.revision = Math.round(message.revision));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePackageReference();
        message.name = object.name ?? '';
        message.revision = object.revision ?? 0;
        return message;
    },
};
function createBaseMigrateFromInfo() {
    return {
        module: '',
    };
}
export const MigrateFromInfo = {
    typeUrl: '/cosmos.app.v1alpha1.MigrateFromInfo',
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== '') {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrateFromInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMigrateFromInfo();
        if (isSet(object.module))
            obj.module = String(object.module);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMigrateFromInfo();
        message.module = object.module ?? '';
        return message;
    },
};
//# sourceMappingURL=module.js.map