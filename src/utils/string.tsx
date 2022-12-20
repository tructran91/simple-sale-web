export const convertToSlug = (text) => {
    // Chuyển hết sang chữ thường
    text = text.toLowerCase();

    // xóa dấu
    text = text
        .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
        .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

    // Thay ký tự đĐ
    text = text.replace(/[đĐ]/g, 'd');

    // Xóa ký tự đặc biệt
    text = text.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    text = text.replace(/(\s+)/g, '-');

    // Xóa ký tự - liên tiếp
    text = text.replace(/-+/g, '-');

    // xóa phần dư - ở đầu & cuối
    text = text.replace(/^-+|-+$/g, '');

    // return
    return text;
}