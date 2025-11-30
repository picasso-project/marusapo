// Modal Content Data
const modalContent = {
  legal: {
    title: '特定商取引法に基づく表記',
    content: `
            <h3>事業者名</h3>
            <p>株式会社ツーハウス マルサポ事業部</p>

            <h3>運営責任者</h3>
            <p>安藤春</p>

            <h3>所在地</h3>
            <p>東京都千代田区九段南1丁目5番6号りそな九段ビル5F マルサポ事業部内</p>

            <h3>電話番号</h3>
            <p>請求時に開示（省略）</p>

            <h3>メールアドレス</h3>
            <p>請求時に開示（省略）</p>

            <h3>サービス料金</h3>
            <p>月額2,980円〜（税込3,278円〜）※プランにより異なります</p>

            <h3>お支払い方法</h3>
            <p>クレジットカード決済</p>

            <h3>サービス提供時期</h3>
            <p>ご契約後、約3~4週間でホームページ公開/p>

            <h3>契約期間</h3>
            <p>最低契約期間24ヶ月</p>

            <h3>中途解約について</h3>
            <p>24ヶ月以内の解約はサービス停止となります。</p>

            <h3>返品・キャンセル</h3>
            <p>サービスの性質上、お申し込み後のキャンセル・返金はお受けできません</p>
        `,
  },
  company: {
    title: '運営元',
    content: `
            <h3>会社名</h3>
            <p>株式会社ツーハウス</p>

            <h3>事業部</h3>
            <p>マルサポ事業部</p>

            <h3>所在地</h3>
            <p>東京都千代田区九段南1丁目5番6号りそな九段ビル5F</p>

            <h3>運営責任者</h3>
            <p>安藤春</p>

            <h3>お問い合わせ</h3>
            <p>当サイトのお問い合わせフォームよりご連絡ください</p>
        `,
  },
  privacy: {
    title: 'プライバシーポリシー',
    content: `
            <h3>個人情報の取り扱いについて</h3>
            <p>開業まるごとHPマルサポ（以下、「当サービス」）は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下「個人情報保護法」）を遵守すると共に、以下のプライバシーポリシー（以下「本ポリシー」）に従い、適切な取扱い及び保護に努めます。</p>

            <h3>1. 個人情報の定義</h3>
            <p>本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）、もしくは個人識別符号が含まれる情報を意味するものとします。</p>

            <h3>2. 個人情報の利用目的</h3>
            <p>当社は、お客様の個人情報を以下の目的で利用いたします。</p>
            <ul>
                <li>サービスの提供・運営のため</li>
                <li>お客様からのお問い合わせに対応するため</li>
                <li>サービスに関するご案内、お知らせ等の配信のため</li>
                <li>メンテナンス、重要なお知らせなど必要に応じた連絡のため</li>
                <li>利用規約に違反したユーザーの特定をし、ご利用をお断りするため</li>
                <li>サービスの改善、新サービスの開発等に役立てるため</li>
            </ul>

            <h3>3. 個人情報の第三者提供</h3>
            <p>当社は、次に掲げる場合を除いて、あらかじめお客様の同意を得ることなく、第三者に個人情報を提供することはありません。</p>
            <ul>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            </ul>

            <h3>4. 個人情報の安全管理</h3>
            <p>当社は、個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、個人情報の安全管理が図られるよう、当社の従業員に対し、必要かつ適切な監督を行います。</p>

            <h3>5. お問い合わせ</h3>
            <p>本ポリシーに関するお問い合わせは、フォームよりお願いいたします。</p>
        `,
  },
};

// Modal Functions
function openModal(type) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const content = modalContent[type];

  if (content) {
    modalBody.innerHTML = `<h2>${content.title}</h2>${content.content}`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
  // Modal Event Listeners
  const modalLinks = document.querySelectorAll('[data-modal]');
  const modal = document.getElementById('modal');
  const modalOverlay = modal.querySelector('.modal__overlay');
  const modalClose = modal.querySelector('.modal__close');

  modalLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const modalType = this.getAttribute('data-modal');
      openModal(modalType);
    });
  });

  modalOverlay.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

  // Close modal on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');

    question.addEventListener('click', function () {
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.faq__question').classList.remove('active');
          otherItem.querySelector('.faq__answer').classList.remove('active');
        }
      });

      // Toggle current item
      question.classList.toggle('active');
      answer.classList.toggle('active');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Add fade-in class to cards
  const cards = document.querySelectorAll('.problem-card, .reason-card');
  cards.forEach(card => {
    observer.observe(card);
  });

  // Animate background illustrations with floating effect
  const bgIllustrations = document.querySelectorAll(
    '.hero__bg-illustration, .solution__bg-illustration'
  );
  bgIllustrations.forEach((illustration, index) => {
    // Add floating animation with different timing for each
    const duration = 4 + index * 0.5; // 4s, 4.5s, etc.
    const delay = index * 0.3; // Stagger the animations

    illustration.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
  });

  // Animate hero illustration with subtle scale animation
  const heroIllustration = document.querySelector('.hero__illustration img');
  if (heroIllustration) {
    heroIllustration.style.animation = 'pulse 3s ease-in-out infinite';
  }

  // Add parallax effect to background illustrations on scroll
  let ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        const scrollY = window.pageYOffset;

        bgIllustrations.forEach((illustration, index) => {
          const speed = 0.3 + index * 0.1; // Different parallax speed for each
          const yPos = -(scrollY * speed);
          illustration.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
      });

      ticking = true;
    }
  });
});
