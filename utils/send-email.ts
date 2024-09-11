import { FormData } from '@/components/forms/contact';
import Swal from 'sweetalert2';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';
  Swal.fire({
    title: 'ההודעה נשלחת...',
    text: 'אנא המתן בזמן שאנו שולחים את ההודעה שלך',
    icon: 'info',
    allowOutsideClick: false,
    showConfirmButton: false
  });

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      Swal.fire({
        title: 'ההודעה שלך נשלחה בהצלחה!',
        text: response.message,
        icon: 'success',
        confirmButtonText: 'אישור'
      });
    })
    .catch((err) => {
      Swal.fire({
        title: 'שגיאה!',
        text: err.message || 'אירעה שגיאה בעת שליחת האימייל.',
        icon: 'error',
        confirmButtonText: 'אישור'
      });
    });
}
