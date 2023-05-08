import React from 'react';
import './main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import {Header} from './shared/Header/Header';
import {Content} from './shared/Content';
import {CardList} from './shared/CardList'
import { comment, commentContext } from './context/commentContext';
import {Provider, useDispatch} from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import {  Action, applyMiddleware, createStore } from 'redux';
import { rootReducer, RootState} from './store/rootReducer';
import thunk, { ThunkAction } from 'redux-thunk';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { Post } from './shared/Post';
import { PostsContextProvider } from './context/postContext';
import { NotFound } from './shared/NotFound';
import { setToken } from './store/rootActions';
import { StoreContext } from 'storeon/react';
import { storeonStore } from './store/storeon/store';

const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    if (window.__token__) {
        dispatch(setToken(window.__token__))
    }
}

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)))

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <AppComponent />
        </Provider>
    )
  }

function AppComponent() {
    const [mounted, setMounted] = React.useState(false)
    const dispatch = useDispatch();

    React.useEffect(() => {
        setMounted(true)
    }, [])

    React.useEffect(() => {
        dispatch(saveToken());
    }, []);

    const CommentProvider = commentContext.Provider
    const [commentValue, setCommentValue] = React.useState("")
    const [commentActive, setCommentActive] = React.useState(-1)
    const [commentComments, setComments] = React.useState<comment[]|null>(
        [
            {
                name: "Adam 1",
                time: "1 час назад",
                text: "Комментарий 1, Комментарий 1, Комментарий 1",
                category: "Спорт",
                id: 1,
                ref: React.useRef<HTMLTextAreaElement>(null)
            },
            {
                name: "Adam 2",
                time: "2 часа назад",
                text: "Комментарий 2, Комментарий 2, Комментарий 2",
                category: "Спорт",
                id: 2,
                ref: React.useRef<HTMLTextAreaElement>(null),

                comments: [
                    {
                        name: "Adam 3",
                        time: "3 часа назад",
                        text: "Комментарий 3, Комментарий 3, Комментарий 3",
                        category: "Спорт",
                        id: 3,
                        ref: React.useRef<HTMLTextAreaElement>(null)
                    },
                ]
            },
            {
                name: "Adam 4",
                time: "24 часа назад",
                text: "Комментарий 4, Комментарий 4, Комментарий 4",
                category: "Спорт",
                id: 24,
                ref: React.useRef<HTMLTextAreaElement>(null)
            }
        ]
    )

    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
            onChangeActive: setCommentActive,
            activeComment: commentActive,
            allComments: commentComments,
            onChangeComments: setComments,
        }}>
            <PostsContextProvider>
                <StoreContext.Provider value={storeonStore}>
                {mounted && (
                    <BrowserRouter>
                        <Layout>
                            <Header/>
                            <Content>
                                <CardList/>
                                <Switch>
                                    <Redirect exact from="/" to="/posts"/>
                                    <Redirect from="/auth" to="/posts"/>
                                    <Route path="/posts">
                                        <Route path="/posts/:id">
                                            <Post />
                                        </Route>
                                    </Route>
                                    <Route path="*">
                                        <NotFound/>
                                    </Route>
                                </Switch>
                            </Content>
                        </Layout>
                    </BrowserRouter>
                )}
                </StoreContext.Provider>
            </PostsContextProvider>
        </CommentProvider>
    )
};

export const App = hot(() => <AppWrapper/>);