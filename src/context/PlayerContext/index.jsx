import * as React from 'react'

const PlayerContext = React.createContext()

const initialState = {
    playlist: [],
    delay: 0,
    // stopped || playing || paused
    status: 'stopped',
    currentIndex: 0,
    loop: 1,
}

const PlayerReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: payload
            }
        case 'SET_ALL_PLAYER_DATA':
            const {
                playlist,
                delay,
                status,
                loop,
                index,
            } = payload
            return {
                ...state,
                playlist,
                delay,
                status,
                loop,
                currentIndex: index,
            }
        case 'PLAY_AUDIO':
            return {
                ...state,
                status: 'playing'
            }
        case 'PAUSE_AUDIO':
            return {
                ...state,
                status: 'paused'
            }
        case 'STOP_AUDIO':
            return {
                ...state,
                status: 'stopped'
            }
    }
}

export default PlayerProvider = ({ children }) => {
    const [playerState, dispatch] = React.useReducer(PlayerReducer, initialState)
    return (
        <PlayerContext.Provider
            value={{
                playerState,
                dispatch,
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayerProvider = () => {
    const context = React.useContext(PlayerContext)
    return context
}