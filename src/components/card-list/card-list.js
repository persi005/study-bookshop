import { DivComponent } from '../../common/div-component.js'
import './card-list.css'

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super()

        this.appState = appState
        this.parentState = parentState
    }

    render() {
        if (this.parentState.loading) {
            this.el.innerHTML = `<p class="card_list__loader">Loading...</p>`
            return this.el
        }

        this.el.classList.add('card_list')
        this.el.innerHTML = `
            <h1>Found: ${this.parentState.list.length}</h1>
        `
        return this.el
    }
}
