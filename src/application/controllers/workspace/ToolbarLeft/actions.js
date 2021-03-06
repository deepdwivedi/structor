/*
 * Copyright 2015 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { bindActionCreators } from 'redux';
import { success, failed, timeout, close} from '../../app/AppMessage/actions.js';
import { reloadPage, setEditModeOn, setLivePreviewModeOn, saveModel, exportModel } from '../DeskPage/actions.js';
import { toggleLibraryPanel, toggleQuickOptions, togglePageTreeview} from '../Desk/actions.js';
import { signOut } from '../../app/AppContainer/actions.js'
import { showModal } from '../../app/SignInModal/actions.js';
import { showModal as proxyShowModal } from '../../app/ProxySetupModal/actions.js';

export const saveProject = () => (dispatch, getState) => {
    dispatch(saveModel());
    dispatch(success('Project has been saved successfully.'));
};

export const containerActions = (dispatch) => bindActionCreators({
    reloadPage, setEditModeOn, setLivePreviewModeOn, saveProject, exportModel,
    toggleLibraryPanel, toggleQuickOptions, togglePageTreeview, showModal, signOut, proxyShowModal
}, dispatch);