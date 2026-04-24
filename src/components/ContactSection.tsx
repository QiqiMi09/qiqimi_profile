export function ContactSection() {
  return (
    <section id="contact" className="space-y-6 pb-20" data-contact="mail-only">
      <h2 className="section-title">联系方式</h2>
      <p className="section-copy">
      全职机会、合作共创，或是内容传播相关的交流，期待碰撞～
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="mailto:miqiqi09@163.com"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-300/40 transition hover:from-cyan-500 hover:to-blue-600"
        >
          发送邮件
        </a>
      </div>
    </section>
  );
}
