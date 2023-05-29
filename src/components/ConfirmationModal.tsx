const { confirm } = AntModal;

export const confirmationModal = (
  title: string,
  content: string,
  cancelText: string,
  confirmText: string,
  onDelete: () => void
) => {
  confirm({
    title: title,
    content: content,
    okText: confirmText,
    cancelText: cancelText,

    okType: "danger",
    onOk() {
      onDelete();
    },
    onCancel() {},
  });
};
