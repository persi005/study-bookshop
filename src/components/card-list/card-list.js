import { DivComponent } from '../../common/div-component.js'
import { Card } from '../card/card.js'
import './card-list.css'

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super()

        this.appState = appState
        this.parentState = parentState
    }

    render() {
        this.el.classList.add('card-list')
        if (this.parentState.loading) {
            this.el.innerHTML = `<p class="card_list__loader">Loading...</p>`
            return this.el
        }

        this.el.innerHTML = `
            <h1>Found: ${this.parentState.list.length}</h1>
        `
        const cardGrid = document.createElement('div')
        cardGrid.classList.add('card-list__inner')

        for (const card of this.parentState.list) {
            cardGrid.append(new Card(this.appState, card).render())
        }

        this.el.append(cardGrid)

        return this.el
    }
}
