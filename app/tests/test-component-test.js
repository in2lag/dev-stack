import TestComponent from '../components/test-component';

describe("Test component", function() {
    it("should have default message", function() {
        var testComponent = new TestComponent();
        expect(testComponent.message).toBe('component works');
    });

    it('should have message, which is passed in controller', function() {
       var testMessage = 'Hello world',
           testComponent = new TestComponent(testMessage);
        expect(testComponent.message).toBe(testMessage);
    });
});