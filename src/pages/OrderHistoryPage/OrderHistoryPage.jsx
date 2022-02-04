import "./OrderHistoryPage.css";
import { checkToken } from '../../utilities/users-service';

export default function OrderHistoryPage() {

  async function handleCheckToken() {
    expDate = await checkToken();
    console.log(expDate);
  }


  return (
    <div>
    
    <h1>
      Order History Page
    </h1>

    <button onClick={handleCheckToken}> Check When My Login Expires</button>
    </div>
  );
}

