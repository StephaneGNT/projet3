class OrderModel {
  constructor([cakes], client, commandDate, deliveryDate, status) {
    this.cake = [cakes];
    this.client = client;
    this.commandDate = commandDate;
    this.deliveryDate = deliveryDate;
    this.status = status;
  }
}

export default OrderModel;
