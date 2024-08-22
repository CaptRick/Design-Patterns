// Payment Gateway A (Adaptee)
class PaymentGatewayA {
    processPayment(amount) {
        // Payment processing logic for Gateway A
        console.log(`Processing payment of $${amount} with Gateway A.`);
        // Additional implementation specific to Gateway A
    }
}

// Payment Gateway B (Adaptee)
class PaymentGatewayB {
    makePayment(amount) {
        // Payment processing logic for Gateway B
        console.log(`Making payment of $${amount} with Gateway B.`);
        // Additional implementation specific to Gateway B
    }
}

// Payment Processor Interface (Target Interface)
class PaymentProcessor {
    pay(amount) {
        throw new Error('pay() method must be implemented.');
    }
}

// Adapter for Payment Gateway A
class PaymentGatewayAAdapter extends PaymentProcessor{
    constructor(gatewayA){
        super();
        this.gatewayA = gatewayA;
    }

    pay(amount){
        this.gatewayA.processPayment(amount);
        return this;
    }
}

// Adapter for Payment Gateway B
class PaymentGatewayBAdapter extends PaymentProcessor{
    constructor(gatewayB){
        super();
        this.gatewayB = gatewayB;
    }

    pay(amount){
        this.gatewayB.makePayment(amount);
        return this;
    }
}

// Usage
const paymentGatewayA = new PaymentGatewayA();
const paymentGatewayB = new PaymentGatewayB();

const payment_through_gateway_A_adapter = new PaymentGatewayAAdapter(paymentGatewayA).pay(233); //Processing payment of $233 with Gateway A.
const payment_through_gateway_B_adapter = new PaymentGatewayBAdapter(paymentGatewayB).pay(566); //Making payment of $566 with Gateway B.