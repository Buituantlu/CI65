export default class BaseComponent {
    state; // lưu trữ dữ liệu của component (tồn tại trong component), có thể thay đổi giá trị
    props; // dữ liệu truyền từ bên ngoài vào component, chỉ có thể đọc (không thay đổi giá trị)
    /**
     * @type {HTMLElement}
     */
    $element;

    constructor(props) {
        this.props = props;
    }

    /**
     * Hiển thị nội dung của component lên màn hình
     * 
     * @returns {HTMLElement}

     */
    render() {

    }

    afterRender() {

    }

    /**
     * Thiết lập lại state của component và render lại component (Khi state thay đổi, component render lại)
     * 
     */
    setState(newState) {
        this.state = newState;
        this.refresh();
    }

    refresh() {
        let $element = this.render();

        if(this.$element) {
            this.$element.replaceWith($element);
        }
        this.$element = $element;
        this.afterRender();
        return this.$element;
    }
}