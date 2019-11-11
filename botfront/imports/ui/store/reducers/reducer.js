import { combineReducers } from 'redux';
import { Map } from 'immutable';

import * as types from '../actions/types';
import stories from './story.reducer';
import analytics from './analytics.reducer';

/* eslint-disable indent */

const initialState = Map({
    projectId: null,
    templatesTablePage: 0,
    templatesTableFilter: '',
    templatesTableShowMatching: false,
    workingDeploymentEnvironment: 'development',
    workingLanguage: null,
});

function settings(state = initialState, action) {
    switch (action.type) {
        case types.SET_PROJECT_ID:
            return state.set('projectId', action.projectId);
        case types.CHANGE_PAGE_TEMPLATES_TABLE:
            return state.set('templatesTablePage', action.page);
        case types.CHANGE_FILTER_TEMPLATES_TABLE:
            return state.set('templatesTableFilter', action.filter);
        case types.TOGGLE_MATCHING_TEMPLATES_TABLE:
            return state.set(
                'templatesTableShowMatching',
                !state.get('templatesTableShowMatching'),
            );
        case types.SET_WORKING_LANGUAGE:
            return state.set('workingLanguage', action.workingLanguage);
        case types.SET_WORKING_DEPLOYMENT_ENVIRONMENT:
            return state.set('workingDeploymentEnvironment', action.env);
        default:
            return state;
    }
}

export default combineReducers({
    settings,
    stories,
    analytics,
});
