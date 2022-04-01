import {
    FETCH_BOARD_LIST,
    FETCH_BOARD,
    FETCH_PRODUCT_BOARD_LIST,
    FETCH_PRODUCT_BOARD,
    FETCH_JPA_BOARD_LIST,
    FETCH_JPA_BOARD,
    FETCH_JPA_BOARD_LIST1,
    FETCH_JPA_BOARD1,

 

    FETCH_BUSINESS_MEMBER,
    CRAWL_START
} from './mutation-types'

export default {
    [FETCH_BOARD_LIST] (state, boards) {
        state.boards = boards
    },
    [FETCH_BOARD] (state, board) {
        state.board = board
    },
    [FETCH_PRODUCT_BOARD_LIST] (state, productBoards) {
        state.productBoards = productBoards
    },
    [FETCH_PRODUCT_BOARD] (state, productBoard) {
        state.productBoard = productBoard
    },
    [FETCH_JPA_BOARD_LIST] (state, boards) {
        state.jpaBoards = boards
    },
    [FETCH_JPA_BOARD] (state, board) {
        state.jpaBoard = board
    },
    [FETCH_BUSINESS_MEMBER] (state, businessMembers) {
        state.businessMembers = businessMembers
    },
    [CRAWL_START] (state, payload) {
        state.crawlLists = payload
    },

    [FETCH_JPA_BOARD_LIST1] (state, boards1) {
        state.jpaBoards1 = boards1
    },
    [FETCH_JPA_BOARD1] (state, board1) {
        state.jpaBoard1 = board1


}
}