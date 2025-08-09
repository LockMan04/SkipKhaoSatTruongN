(function () {
  // 1) Chọn tất cả nhóm câu trả lời
  const groups = document.querySelectorAll('ul.group-cautraloi');

  // Helper: chọn radio theo nhãn hiển thị
  const checkByLabel = (groupEl, labelText) => {
    const label = Array.from(groupEl.querySelectorAll('label'))
      .find(l => l.textContent.trim().includes(labelText));
    if (!label) return false;
    const input = label.querySelector('input[type="radio"]');
    if (!input) return false;
    input.checked = true;
    input.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  };

  // 2) Đặt câu trả lời mặc định cho mỗi nhóm
  groups.forEach(g => {
    // Thứ tự ưu tiên: “Rất hài lòng” -> “Hoàn toàn đồng ý” -> fallback chọn radio đầu tiên
    if (!checkByLabel(g, 'Rất hài lòng') &&
        !checkByLabel(g, 'Hoàn toàn đồng ý')) {
      const first = g.querySelector('input[type="radio"]');
      if (first) {
        first.checked = true;
        first.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  });

  // 3) Điền textarea ý kiến (nếu có)
  document.querySelectorAll('textarea, .input-ykien').forEach(t => {
    t.value = 'Không có ý kiến';
    t.dispatchEvent(new Event('input', { bubbles: true }));
  });

  // 4) Submit form
  const form = document.querySelector('form');
  if (form) {
    // Trường hợp trang bật/tắt nút gửi theo validate:
    // thử kích hoạt click nút gửi nếu có, nếu không thì requestSubmit
    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"], #btnGui');
    if (submitBtn) submitBtn.click();
    else if (typeof form.requestSubmit === 'function') form.requestSubmit();
    else form.submit();
  } else {
    console.warn('Không tìm thấy form để gửi.');
  }
})();