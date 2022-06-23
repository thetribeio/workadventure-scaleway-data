import { MapStorageClient } from "../Messages/generated/messages_grpc_pb";
import grpc from "grpc";
import { MAP_STORAGE_URL } from "../Enum/EnvironmentVariable";

console.log(`%%%%%%%%% MAP STORAGE URL: ${MAP_STORAGE_URL}`);

export const mapStorageClient = new MapStorageClient(MAP_STORAGE_URL, grpc.credentials.createInsecure());
