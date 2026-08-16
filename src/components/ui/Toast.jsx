import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const Toast = () => {
  const { toastMessage } = useModal();

  if (!toastMessage) return null;

  const isSuccess = toastMessage.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-bounce-in shadow-2xl rounded-xl border border-slate-200 bg-white p-4 flex items-start gap-3">
      <div className={`p-2 rounded-lg shrink-0 ${isSuccess ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
        {isSuccess ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
      </div>
      <div className="flex-1 text-sm font-medium text-slate-800">
        <p className="font-semibold text-brand-navy-950">{isSuccess ? 'Success!' : 'Notice'}</p>
        <p className="text-slate-600 mt-0.5">{toastMessage.message}</p>
      </div>
    </div>
  );
};

export default Toast;
