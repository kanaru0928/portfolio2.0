import React, { useCallback, useEffect, useRef, useState } from "react";

export default function CheckFeature() {
  const modal = useRef<HTMLDialogElement>(null);
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    const checkFeature = (feature: string) => {
      if (CSS.supports(feature)) return true;
      console.warn(`Feature not supported: ${feature}`);
      setFeatures((prev) => [...prev, feature]);
      return false;
    };

    const view = !checkFeature("animation-timeline: view()");
    const scroll = !checkFeature("animation-timeline: scroll()");
    const range = !checkFeature("animation-range");

    if (view || scroll || range) {
      modal.current?.showModal();
    }
  }, []);

  return (
    <dialog ref={modal} id="legacy_modal" className="modal">
      <div className="modal-box">
        <h3>Warning</h3>
        <div className="py-4 flex gap-2 flex-col">
          <p>
            ご使用のブラウザでは一部の機能がサポートされていないため、サイトを正常に表示することができません。
            レガシー版のサイトをご利用いただくか、最新のブラウザをご利用ください。
          </p>
          <p>
            <span className="font-bold">注意:&nbsp;</span>
            レガシー版は表示は同じですが、動作が不安定になったり遅くなったりする場合があります。
          </p>
          <details>
            <summary>非対応の機能</summary>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>
                  <code>{feature}</code>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <div className="flex gap-3">
              <button className="btn">不安定なサイトを利用</button>
              <button
                className="btn btn-accent"
                onClick={() => {
                  window.location.replace("?legacy=true");
                }}
              >
                レガシー版に移動
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
