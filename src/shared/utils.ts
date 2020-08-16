export function cloneDeep(object:any) {
    return JSON.parse(JSON.stringify(object));
}