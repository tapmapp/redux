export interface NomralModuleState {
    stories: Story[];
}

export interface Story {
    title: string;
    content: string;
}

const initialState: NomralModuleState = {
    stories: []
};

export function normalModuleReducer(state = initialState) {
    return { ...state };
}
