import onChange from 'on-change'
import { AbstractView } from '../../common/view.js'
import { Header } from '../../components/header/header.js'

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
    }

    constructor(appState) {
        super()

        this.appState = appState
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.setTitle('Bookshop - letters for everyone')
    }

    appStateHook(path) {
        if (path === 'favorites') {
        }
    }

    render() {
        const main = document.createElement('div')
        this.app.innerHTML = ''
        this.app.append(main)
        this.renderHeader()
    }

    renderHeader() {
        const header = new Header(this.appState).render()
        this.app.prepend(header)
    }
}
