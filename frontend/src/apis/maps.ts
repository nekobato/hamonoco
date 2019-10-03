const mockMap: any = {
  mapUuid: 'abcd-1234',
  projectUuid: 'bcde-2345',
  locations: [],
};

export async function getMap() {
  return mockMap;
}

export async function addLocation({ x, y }: { mapUuid: string; x: number; y: number }) {
  mockMap.locations.push({
    x,
    y,
  });
  return {
    data: {},
    meta: {
      result: 'OK',
    },
    error: null,
  };
}
